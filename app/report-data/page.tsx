import {columns} from "./columns"
import { data, dataType } from "@/components/ReportData"
import { DataTable } from "./data-table"

const ReportTable= ()=>{
    return(
        <div className="container mx-auto py-10">
            <DataTable data={data} columns={columns}/>
        </div>
    )
}
export default ReportTable