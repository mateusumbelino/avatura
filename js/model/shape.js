class shape 
{

    constructor(id, path, options)
    {
        this.id = id;
        this.path = path;
        this.options = options;
    }

    setId(id)
    {
        this.id = id;
    }

    getId()
    {
        return this.id;
    }

    setPath(path)
    {
        this.path = path;
    }

    getImg()
    {
        return this.path + this.options[this.id]['name'] + '.png';
    }


}