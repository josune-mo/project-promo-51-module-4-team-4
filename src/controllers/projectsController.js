const model = require('../models/projects')
const getConnection = require('../db/db');


const getAllProjects = async (req, res) => {
    //**Todos, Sandra*/


}

const getProjectById =async (req, res) => {
//**Por ID Joana */


}


const createProject = async (req, res) => {
try{
    const conn = await getConnection ();
    const {name, slogan, repo, demo, technologies, description, image, autor, job, photo} = req.body;

    //**Buscamos si la autora existe.. al final creo que era más viable hacer la tabla intermedia  :P */
    const [rows] = await conn.query ('SELECT id FROM autores WHERE autor =? AND job = ?', [autor, job])

    let autor_id;
    if (rows.length > 0) {
        autor_id = rows [0].id
    } else {
    const [insertResults] = await conn.query ('INSERT INTO autores (autor, job, photo) VALUES (?, ?, ? )', [autor, job, photo]); 
    autor_id = insertResults.insertId;
    }
    const [result] = await conn.query ('INSERT INTO project (name, slogan, repo, demo, technologies, description, image, autor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [name, slogan, repo, demo, technologies, description, image, autor_id]
    );
    await conn.end();
    res.status(200).json({ message: 'Proyecto insertado', id: result.insertId})
}catch (error){
    res.status(500).json ({error: error.message})
}
}

const updateProject = async (req, res) => {
//**PUT, Chiara */



}

const deleteProject = async (req, res) => {
    //**Josune */



}


//**En esta exportación si usamos llaves porque hay varias funciones a exportar */
module.exports = {
getAllProjects,
getProjectById,
createProject,
updateProject,
deleteProject
};
