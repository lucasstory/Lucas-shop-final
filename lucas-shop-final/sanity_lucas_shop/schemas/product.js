export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        }, 
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'brand',
            title: 'brand',
            type: 'string'
        },
        {
            name: 'sizeOne',
            title: 'SizeOne',
            type: 'string',
        },
        {
            name: 'sizeTwo',
            title: 'SizeTwo',
            type: 'string',
        },
        {
            name: 'sizeThree',
            title: 'SizeThree',
            type: 'string',
        },
        {
            name: 'colorOne',
            title: 'ColorOne',
            type: 'string',
        },
        {
            name: 'colorTwo',
            title: 'ColorTwo',
            type: 'string',
        },
        {
            name: 'colorThree',
            title: 'ColorThree',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 90,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        }
    ]
}