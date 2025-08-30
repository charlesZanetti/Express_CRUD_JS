import  Jwt  from "jsonwebtoken";

export default function verificaToken(req:any, res:any, next:any){
    const headerAuth = req.headers['authorization'];
    const token = headerAuth?.split(' ')[1];
    if (!token){
        return res.status(401).json({mensagem: 'Token nao fornecido'});
    }

    Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as 'Secret', (err:any, user:any) =>{

        if (err) return res.status(403).json({mensagem: 'Token invalido'})
    
    })

    next();
}