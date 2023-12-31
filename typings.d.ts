interface Image{
    _key: string;
    _type: "image";
    asset: {
        url: string;
    };
}

interface Product{
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title: string;
    price: number;
    slug: {
        _type: "slug";
        current: string;
    };
    description: string;
    image: Image[];
}