type TransactionProps = {
    id:number | string;
    fromUserPubkey:string;
    toUserPubkey:string;
    amount:number;
    type:string;
    fee:number;
    createdAt:string;
    updatedAt:string;
    deletedAt:string;
}