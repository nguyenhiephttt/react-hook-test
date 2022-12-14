import request from '~/utils/request';

export const GetAllInvoice = async () => {
    try {
        const re = await request.get('/invoices');
        return re.data;
    } catch (error) {
        console.error(error);
    }
}

export const GetAllListItem = async (id) => {
    try {
        const re = await request.get(`/InvoiceDetails?idInvoice=${id}`);
        return re.data;
    } catch (error) {
        console.error(error);
    }
}
export const GetItemById=async (id) => {
    try{
        const re = await request.get(`/invoices?id=${id}`);
        return re.data;
    }catch (error) {
        console.log(error)
    }
}

export const PostInvoiceItem = async (invoice) => {
    try {
        const re = await request.post('/invoices', invoice);
        return re.data;

    } catch (error) {
        console.error(error);
    }
}

