import {Request, Response} from 'express';
import pool from '../database';

class Regis_usuarioController {

  public async list (req :Request, res :Response) {
       const usuario = await pool.query('SELECT * FROM usuarios');
        res.json(usuario);
    }

    public async create (req :Request, res :Response) {
       await pool.query('INSERT INTO usuarios set ?', [req.body]);
        console.log(req.body);
        res.json( {text:"usuario añadido"});
    } 

    public async getone (req :Request, res :Response) {
        const {id} = req.params;
       const usuario = await pool.query('SELECT * FROM usuarios WHERE iduser = ?', [id]);
       
        if(usuario.length > 0){
            return res.json(usuario[0]);
        }
        else{
        res.status(404).json({text: 'el usuario no existe'});
        }
        
    }

    public async delete (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('DELETE FROM usuarios WHERE iduser = ?', [id]);
        res.json({message: 'usuario eliminado'});
    }

    public async update (req :Request, res :Response)
    {
        const {id} = req.params;
        await pool.query('UPDATE usuarios set ? WHERE iduser = ?', [req.body,id]);
        res.json({text: 'usuario actualizada'});
    }
}


export const regis_usuarioController = new Regis_usuarioController();