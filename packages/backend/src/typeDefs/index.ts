const typeDefs = `#graphql

    input Options {
        young: Boolean, 
        gray: Boolean
    }

    type Query {
        image(
            width: String, 
            height: String,
            options: Options 
        ): String
    }

`;

export default typeDefs;