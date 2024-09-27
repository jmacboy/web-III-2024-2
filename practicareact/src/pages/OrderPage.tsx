import { useState } from "react";
import { Item } from "../models/Item";
import { NavMenu } from "../components/NavMenu";

export const OrderPage = () => {
    const [listaItems, setListaItems] = useState<Item[]>([
        {
            id: 1,
            texto: "Item 1",
            orden: 1
        },
        {
            id: 2,
            texto: "Item 2",
            orden: 2
        },
        {
            id: 3,
            texto: "Item 3",
            orden: 3
        },
        {
            id: 4,
            texto: "Item 4",
            orden: 4
        },
        {
            id: 5,
            texto: "Item 5",
            orden: 5
        }
    ]);
    const onMoverArribaClick = (id: number) => {
        const index = listaItems.findIndex((item) => item.id === id);
        if (index > 0) {
            const item = listaItems[index];
            const itemAnterior = listaItems[index - 1];
            listaItems[index] = itemAnterior;
            listaItems[index - 1] = item;
            const listaConOrden = listaItems.map((item, index) => {
                return {
                    ...item,
                    orden: index + 1
                };
            });
            setListaItems([...listaConOrden]);
            //aqui mandan al backend el orden actualizado
        }
    }
    const onMoverAbajoClick = (id: number) => {
        const index = listaItems.findIndex((item) => item.id === id);
        if (index < listaItems.length - 1) {
            const item = listaItems[index];
            const itemSiguiente = listaItems[index + 1];
            listaItems[index] = itemSiguiente;
            listaItems[index + 1] = item;
            const listaConOrden = listaItems.map((item, index) => {
                return {
                    ...item,
                    orden: index + 1
                };
            });
            setListaItems([...listaConOrden]);
            //aqui mandan al backend el orden actualizado
        }
    }
    return (
        <div>
            <NavMenu />
            {listaItems.map((item) => {
                return (
                    <div key={item.id} className="border-solid mt-2 w-80">
                        {item.texto}<button onClick={() => { onMoverArribaClick(item.id) }}>
                            Arriba
                        </button>
                        <button onClick={() => { onMoverAbajoClick(item.id) }}>Abajo</button>
                    </div>
                );
            })}
            <div>
                <button onClick={() => {
                    console.log(listaItems);
                }}>Mostrar orden</button>
            </div>
        </div>
    );
}