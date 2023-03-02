
interface Apparel {
    code: string;
    sizes: {
        [size: string]:{
            quantity: number;
            price: number;
        };
    };
}
// const apparel : Apparel ={
//     code: "A1234",
//     sizes:{
//     "M":  {
//         quantity: 10,
//         price: 1099.00
//         }
//     }
// }
export default Apparel;
