import { Tienda } from "../models/tienda.m";
import tiendasData from "../pages/docs/tienda.json"; 

export function getTiendasLocal(): Tienda[] {
        const tiendas: Tienda[] = tiendasData.results.map((tienda: any) => ({
          id: tienda.national_number,
          name: tienda.name,
          imggif: tienda.sprites['animated'],
          imgnormal: tienda.sprites['normal'],
          imglarge: tienda.sprites['large'],
          total: tienda.total,
          hp: tienda.hp,
          attack: tienda.attack,
          defense: tienda.defense,
          sp_atk: tienda.sp_atak,
          sp_def: tienda.sp_def,
          speed: tienda.speed,
          type: tienda.type[0],
        }));
        const repetidosTienda =tiendas.filter(

                (tienda:any, index: number)=>
                tiendas.findIndex((other:any )=> other.id==tienda.id)=== index
        );        
        return repetidosTienda;

}