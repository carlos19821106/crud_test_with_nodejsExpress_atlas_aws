const express = require("express");
const router = express.Router();
const Post = require('../models/Posts');

let stringify = require('json-stringify-safe');
// var fs = require('fs');


//get all db documents
router.get('/', async (req, res) => {
    try {
        const finePosts = await Post.find()
        // const finePosts=[{_id:'01',title:'anatomy 2nd Edition',connect:'new',__v:0},
        // {_id:'02',title:'how to run faster with getting hurt',connect:'old',__v:0},
        // {_id:'03',title:'it is just a moutain',connect:'fine',__v:0}];
        res.json(finePosts)
    } catch (err) {
        res.json({ message: err })
        // console.log("this happen error");
    }
});


//add document
router.post('/', async (req, res) => {
    console.log(req.body.title);
    console.log(req.body.connect);
    // return;
    const post = new Post({
        title: req.body.title,
        connect: req.body.connect
    })

    try {
        const savePost = await post.save()
        res.json(savePost)
    } catch (err) {
        res.json({ message: err })
    }
});


//find doc by ID; not enabed yet.
// router.get('/:postId', async (req, res) => {
//     try {
//         const findPost = await Post.findById(req.params.postId)
//         res.json(findPost)
//     } catch (err) {
//         res.json({ message: err })
//     }
// });
//del documents
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId })
        res.json(removePost)
    } catch (err) {
        res.json({ message: err })
    }
});


//modify documents; this part is a disaster for me.
router.patch('/:postId', async (req, res) => {
    console.log(req.params.postId);
    console.log(req.body);
    // console.log(stringify(req));
    
    //for gen debug log 
    // if(stringify(req.body)=="{}"){
    //     fs.writeFile('x:/ntou/log/reqContent.txt_fail', stringify(req), function (err) {
    //         if (err) return console.log(err);
    //         // console.log('req > reqContent.txt');
    //     });    
    // }else{
    //     fs.writeFile('x:/ntou/log/reqContent.txt_work', stringify(req), function (err) {
    //         if (err) return console.log(err);
    //         // console.log('req > reqContent.txt');
    //     });
    // }

    // console.log(req.data.title);
    // console.log(req.data.connect);
    // return;
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title ,connect:req.body.connect} } )
        res.json(updatePost)
        console.log(updatePost);
    } catch (err) {
        res.json({ message: err })
    }
});

module.exports = router


