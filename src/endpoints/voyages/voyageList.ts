import { D1ListEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { VoyageModel } from "./base";

export class VoyageList extends D1ListEndpoint<HandleArgs> {
	_meta = {
		model: VoyageModel,
	};

	searchFields = ["PONumber", "vessel"];
	defaultOrderBy = "PONumber DESC";

    // only use filterFields for equality filters, not for range filters (e.g. DueDate > 2024-01-01)
    filterFields = ["SupplierId", "MaterialId"];

    async list(args: HandleArgs) {
        

        const [c] = args;
        console.log("DB binding:", c.env.DB);
		const db = c.env.DB;
		const q = c.req.query();

		const SupplierId = q.SupplerId;
		const MaterialId = q.MaterialId;
		const fromdate = q.fromDate;
		const todate = q.toDate;

		let sql = 'SELECT * FROM Voyage WHERE 1=1';
		const params: any[] = [];

        // SupplierId filter
        if (SupplierId) {
            sql += ` AND SupplierId = ?`;
            params.push(Number(SupplierId));
        }

        // MaterialId filter
        if (MaterialId) {
            sql += ` AND MaterialId = ?`;
            params.push(Number(MaterialId));
        }

        // Date range filters
        if (fromdate) {
            sql += ` AND ArrivedDate >= ?`;
            params.push(fromdate);
        }

        if (todate) {
            sql += ` AND ArrivedDate <= ?`;
            params.push(todate);
        }

        // Ordering
        sql += ` ORDER BY PONumber DESC`;

        // Pagination (Chanfana provides page & per_page)
        const page = Number(q.page ?? 1);
        const perPage = Number(q.per_page ?? 100);
        const offset = (page - 1) * perPage;

        sql += ` LIMIT ? OFFSET ?`;
        params.push(perPage, offset);

        // Execute
        const result = await db.prepare(sql).bind(...params).all();

        // Count total (for result_info)
        const countSql = `SELECT COUNT(*) as total FROM Voyage WHERE 1=1`;
        // You can repeat filters here if you want accurate total_count
        const total = await db.prepare(countSql).all();

        return {
            success: true,
            result: result.results,
            result_info: {
                count: result.results.length,
                page,
                per_page: perPage,
                total_count: total.results[0].total
            }
        };


	}


}
