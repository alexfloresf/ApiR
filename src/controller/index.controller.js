const { Pool } = require('pg');
const e = require('express');

/*const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '5n4Cl4v3S3g5r4',
    database: 'firstapi',
    port: '5432'
}); */
const pool = new Pool ({
    host: 'ec2-54-235-181-120.compute-1.amazonaws.com',
    user: 'arycemdrbgagiu',
    password: '09ec32f5ac62f2095274d37fd952596b76aadf711faa6c7545e8bdc96d9857cd',
    database: 'dd0pq61reea9mp',
    port: '5432',
    ssl: true
});
const getUsers = async(req,res)=>{
   const response = await pool.query('SELECT * FROM socios ORDER BY id');
   //console.log(response.rows);
   //res.send('users');
   res.status(200).json(response.rows);
}

const getUserById = async(req,res)=>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM socios WHERE id=$1',[id]);
    res.status(200).json(response.rows);
}

const deleteUser = async(req,res)=>{
    const id =req.params.id;
    const response = await pool.query('DELETE FROM socios WHERE id= $1',[id]);
    console.log(response);
    res.json({
        message: 'Delete Success!',
        body: {
            user: {id}
        }    
});
}

const createUser = async (req,res)=>{
    const { name, email, phone} = req.body;
    const response = await pool.query('INSERT INTO socios (name, email, phone) VALUES ($1, $2, $3)',[name, email, phone]);
    console.log(response);
    res.json({
            message: 'Success!',
            body: {
                user: {name, email, phone}
            }    
    });
}

const updateUser = async (req,res)=>{
    const id =req.params.id;
    const { name, email, phone} = req.body;
    const response = await pool.query('UPDATE socios SET name= $1, email= $2, phone= $3 WHERE id= $4',[
        name,
        email,
        phone,
        id
    ]);
    console.log(response);
    res.json('Usuario Actualizado!');
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
}