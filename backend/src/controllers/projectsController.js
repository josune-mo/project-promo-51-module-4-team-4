const getConnection = require("../db/db");

const getAllProjects = async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query("SELECT  project.*,  autores.autor, autores.job, autores.photo FROM project JOIN autores ON project.autor_id = autores.id");
    await conn.end();
    res.status(200).json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error al obtener proyectos" });
  }
};

const getProjectById = async (req, res) => {
  const { id } = req.params;
  //**Por ID Joana */
  try {
    const conn = await getConnection();

    const [rows] = await conn.query(
      `
      SELECT 
        p.id, p.name, p.slogan, p.repo, p.demo, p.technologies, 
        p.description, p.image, 
        a.autor, a.job, a.photo
      FROM project p
      JOIN autores a ON p.autor_id = a.id
      WHERE p.id = ?
    `,
      [id]
    );

    await conn.end();

    if (rows.length === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error retrieving project by ID",
    });
  }
};

const createProject = async (req, res) => {
  console.log(" Recibida petición POST /projects");
  try {
    const conn = await getConnection();
    const {
      projectName,
      projectSlogan,
      projectRepository,
      projectDemo,
      technology,
      description,
      projectAvatar,
      authorName,
      authorJob,
      profileAvatar,
    } = req.body;
console.log(req.body)
    //**Buscamos si la autora existe.. al final creo que era más viable hacer la tabla intermedia  :P */
    const [rows] = await conn.query(
      "SELECT id FROM autores WHERE autor =? AND job = ?",
      [authorName, authorJob]
    );

    let autor_id;
  console.log( rows)
    if (rows.length > 0) {
      autor_id = rows[0].id;
    } else {
      const [insertResults] = await conn.query(
        "INSERT INTO autores (autor, job, photo) VALUES (?, ?, ? )",
        [authorName, authorJob, profileAvatar]
      );
      autor_id = insertResults.insertId;
    }  
    const [result] = await conn.query(
      "INSERT INTO project (name, slogan, repo, demo, technologies, description, image, autor_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [projectName, projectSlogan, projectRepository, projectDemo, technology, description, projectAvatar, autor_id]
    );
    await conn.end();
    res
      .status(200)
      .json({ message: "Proyecto insertado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProject = async (req, res) => {
    //** DELETE - Josune */
    try {
      const { id } = req.params;
      const conn = await getConnection();
  
      const [result] = await conn.query("DELETE FROM project WHERE id = ?", [id]);
  
      await conn.end();
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
  
      res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };










/* const updateProject = async (req, res) => {
  
  try {
    const conn = await getConnection();
    const {id} = req.params;
    const { name, slogan, repo, demo, technologies, description, image, autor, job, photo, } =
      req.body;

      const [rows] = await conn.query(
        "SELECT id FROM autores WHERE autor =? AND job = ?",
        [autor, job]
      );
  
      let autor_id;
      if (rows.length > 0) {
        autor_id = rows[0].id;
      } else {
        const [insertResults] = await conn.query(
          "UPDATE autores (autor, job, photo) VALUES (?, ?, ? )",
          [autor, job, photo]
        );
      }

    // Actualizar proyecto
    const [result] = await conn.query(
      `UPDATE project SET name = ?, slogan = ?, repo = ?, demo = ?, technologies = ?, description = ?, image = ?, autor = ?, job = ?, photo = ? WHERE id = ?`,
      [name, slogan, repo, demo, technologies, description, image, autor, job, photo, id]
    );
    await conn.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}; */



//**En esta exportación si usamos llaves porque hay varias funciones a exportar */
module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  //updateProject,
  deleteProject,
};
