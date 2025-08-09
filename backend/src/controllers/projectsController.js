const getConnection = require("../db/db");

// Listar todos los proyectos
const getAllProjects = async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query(
      "SELECT  project.*,  autores.autor, autores.job, autores.photo FROM project JOIN autores ON project.autor_id = autores.id"
    );
    await conn.end();
    res.status(200).json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Error al obtener proyectos" });
  }
};

// Obtener un proyecto por ID
const getProjectById = async (req, res) => {
  const { id } = req.params;
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

// Crear un nuevo proyecto
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
    console.log(req.body);
    const [rows] = await conn.query(
      "SELECT id FROM autores WHERE autor =? AND job = ?",
      [authorName, authorJob]
    );

    let autor_id;
    console.log(rows);
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
      [
        projectName,
        projectSlogan,
        projectRepository,
        projectDemo,
        technology,
        description,
        projectAvatar,
        autor_id,
      ]
    );
    await conn.end();
    res
      .status(200)
      .json({ message: "Proyecto insertado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un proyecto
const deleteProject = async (req, res) => {
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

//**En esta exportación si usamos llaves porque hay varias funciones a exportar */
module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  deleteProject,
};
