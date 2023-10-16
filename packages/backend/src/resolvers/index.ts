interface props {
    width: string,
    height: string,
    options: {
        young?: boolean,
        gray?: boolean
    }
};

const API = process.env.API || 'https://placekeanu.com'

const resolvers = {
    Query: {
        image: (
            _: any, 
            { width, height, options: { gray = false, young = false }}: props
        ) => {
            return `${API}/${width}/${height}/${young ? 'y' : ''}${gray ? 'g' : ''}`
        }
    }
}

export default resolvers;