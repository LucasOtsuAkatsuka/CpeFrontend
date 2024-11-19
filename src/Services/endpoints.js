import api from "./api";

//Usuarios
export async function GetUsers(){
    const {data} = api.get(`/usuarios`)
    return data;
}

export async function CreateUsers(body){
    console.log("cheguei na endpoint")
    console.log("Body enviado:", body);
    const {data} = await api.post(`/usuarios`, body);
    return data;
}

export async function UpdateUsers(id, body){
    const {data} = await api.put(`/usuarios:${id}`, body)
    return data;
}

export async function DeleteUsers(id){
    const {data} = await api.delete(`/usuarios:${id}`)
    return data;
}

//Sessoes