import { ApiException, fromHono } from "chanfana";
import { Hono } from "hono";
import { tasksRouter } from "./endpoints/tasks/router";
import { materialTypeRouter } from "./endpoints/materialTypes/router";
import { categoryRouter } from "./endpoints/categorys/router";
import { supplierRouter } from "./endpoints/suppliers/router";
import { materialRouter } from "./endpoints/materials/router";
import { ContentfulStatusCode } from "hono/utils/http-status";
import { voyageRouter } from "./endpoints/voyages/router";
import { manifestRouter } from "./endpoints/manifests/router";
// import { DummyEndpoint } from "./endpoints/dummyEndpoint";

// Start a Hono app
const app = new Hono<{ Bindings: Env }>();

app.onError((err, c) => {
	if (err instanceof ApiException) {
		// If it's a Chanfana ApiException, let Chanfana handle the response
		return c.json(
			{ success: false, errors: err.buildResponse() },
			err.status as ContentfulStatusCode,
		);
	}

	console.error("Global error handler caught:", err); // Log the error if it's not known

	// For other errors, return a generic 500 response
	return c.json(
		{
			success: false,
			errors: [{ code: 7000, message: "Internal Server Error" }],
		},
		500,
	);
});

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
	schema: {
		info: {
			title: "My Awesome API",
			version: "2.0.0",
			description: "This is the documentation for my awesome API.",
		},
	},
});

// Register Tasks Sub router
openapi.route("/tasks", tasksRouter);
openapi.route("/materialTypes", materialTypeRouter); // Just reusing the same router for demo purposes, but you can create a separate one for material types
openapi.route("/categorys", categoryRouter);
openapi.route("/suppliers", supplierRouter);
openapi.route("/materials", materialRouter);
openapi.route("/voyages", voyageRouter);
openapi.route("/manifests", manifestRouter);

// Register other endpoints
// openapi.post("/dummy/:slug", DummyEndpoint);

// Export the Hono app
export default app;
