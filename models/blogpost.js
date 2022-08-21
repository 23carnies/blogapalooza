const mongoose = require('mongoose');
// const marked = require('marked');
// const slugify = require('slugify');
// const createDOMPurify = require('dompurify');
// const { JSDOM } = require('jsdom');
// const window = new JSDOM('').window;
// const DOMPurify = createDOMPurify(window);

const commentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    comment: { type: String, required: true },
}, {
    timestamps: true,
});

const blogpostSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, },
    markdown: { type: String, required: true, },
    createdAt: { type: Date, default: Date.now, },
    comments: [commentSchema],
    // slug: {
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    // sanitizedHtml: {
    //     type: String,
    //     required: true,
    // },

}, {
    timestamps: true,
});

// blogpostSchema.pre('validate', function(next) {
//     if (this.title) {
//         this.slug = slugify(this.title, { lower: true, 
//         strict: true });
//     }

//     if (this.markdown) {
//         this.sanitizedHtml = DOMPurify.sanitize(marked.parse(this.markdown));
//     }
//     next();
// });

module.exports = mongoose.model('Blogpost', blogpostSchema);