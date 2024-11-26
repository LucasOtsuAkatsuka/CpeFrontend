import { useQuery, useMutation } from "@tanstack/react-query";
import { CreateSessao, DeleteSessao, GetSessao} from "../Services/endpoints";

export function useGetSessao({onSuccess = ()=>{}, onError= ()=>{}}={}){
    return useQuery({ queryKey:["sessoes"], queryFn: GetSessao , onSuccess, onError});
}

export function useCreateSessao({onSuccess = ()=>{}, onError= ()=>{}}={}){
    return useMutation({mutationFn: CreateSessao, onSuccess, onError});
}

export function useDeleteSessao({onSuccess = ()=>{}, onError= ()=>{}}={}){
    return useMutation({mutationFn: DeleteSessao, onSuccess, onError});
}