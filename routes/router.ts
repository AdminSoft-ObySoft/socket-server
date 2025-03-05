import {Router, Request, Response} from 'express';

const router = Router();

router.get('/mensajes', (req:Request, res:Response) => {
    res.json({
        ok:true,
        mensaje:'Todo esta bien!!!'
    });
});

router.post('/mensajes', (req:Request, res:Response) => {

    const { cuerpo, de }= req.body

    console.log({cuerpo,de});
    

    res.json({
        ok:true,
        mensaje:'POST - LISTO',
        cuerpo,
        de
    });
});

router.post('/mensajes/:id', (req:Request, res:Response) => {

    const { cuerpo, de }= req.body
    const params = req.params;

    res.json({
        ok:true,
        mensaje:'POST - LISTO',
        params,
        cuerpo,
        de
    });
});

export default router