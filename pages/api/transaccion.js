import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler (req, res){
    if(req.method === 'POST'){
        try{
            const resultado = await prisma.$transaction(async (prisma)=>{
                try{
                const productsp = await prisma.Producto.findMany();
                res.status(200).json({productsp});
                console.log(productsp);
                }catch(error){
                    res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
                };
            });
         console.log("Éxito Product"); // Imprimir mensaje de éxito en la consola del servidor
          return resultado; // Devolver el producto creado como resultado
        } catch(error){
            res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
        }    
      res.status(200).json({ message: 'Transacción completada con éxito.'});
    } catch (error) {
      console.log("Error:", error); // Imprimir mensaje de error en la consola del servidor
      res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
    } finally {
      await prisma.$disconnect(); // Desconectarse de la base de datos
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}

