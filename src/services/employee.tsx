import { EmployeeData } from "../types";
import { WS_BASE_URL, callService } from "../utils";

export const fetchEmployes = async (
    query: string = "",
    abortController?: AbortController
): Promise<EmployeeData> => {
    const url = `${WS_BASE_URL}/routes.php?&page=employee&actions=getEmployeeList&${query}`;
    return await callService({
        url: url,
        method: 'GET',
        userToken: 'sdasdasd',
        abortController: abortController
    })
}
