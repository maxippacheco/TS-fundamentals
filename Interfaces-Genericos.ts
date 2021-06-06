
interface Asset2{
    x, y: number;
    // generico: Z;
}

function generic<Z extends Asset2>(obj: Z){

}


// generic<number>(20);

class Point{
    x: number;
    y: number;
    generico: string;
}

generic<Point>(new Point());

