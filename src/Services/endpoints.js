import api from "./api";

//Usuarios
export async function GetUsers(){
    const {data} = api.get(`/usuarios`)
    return data;
}

export async function CreateUsers(body){
    console.log("Body enviado:", body);
    const {data} = await api.post(`/usuarios`, body);
    return data;
}

export async function UpdateUsers({id, body}){
    console.log("Body enviado:", body);
    console.log("id enviado: ", id);
    const {data} = await api.put(`/usuarios/${id}`, body)
    return data;
}

export async function DeleteUsers(id){
    const {data} = await api.delete(`/usuarios/${id}`)
    return data;
}

//Sessoes
export async function CreateSessao(body){
    console.log("cheguei na endpoint sessao")
    console.log("Body enviado:", body);
    const {data} = await api.post(`/sessoes`, body);
    return data;
}

export async function DeleteSessao(id){
    const {data} = await api.delete(`/sessoes/${id}`)
    return data;
}

export async function GetSessao(){
    const {data} = api.get(`/sessoes`)
    return data;
}