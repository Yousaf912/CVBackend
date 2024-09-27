const Zodvalidation = (ZodSchema) => async (req, res, next) => {
    try {
        const parseBody = await ZodSchema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (er) {
        res.status(400).send({message:er})
    }
}

module.exports = Zodvalidation