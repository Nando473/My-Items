import prisma from "../../prisma/client";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
        const vistaClientes = await prisma.cliente.findMany({
          select: {
            nom_cli: true,
            email_cli: true,
          },
        });

      res.status(200).json({ VistaTienda: vistaClientes });
    } catch (error) {
      res.status(500).json(`Error al obtener los datos de la vista: ${error}`);
    }
  } else {
    res.status(400).json({ error: 'Método no permitido' });
  }
}

