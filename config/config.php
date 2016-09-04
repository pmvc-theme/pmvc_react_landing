<?php

$paths=[
    'index'=>__DIR__.'/../index.html',
    'laze'=>__DIR__.'/../index_laze.html',
];

${_INIT_CONFIG}=[
    'paths'=>$paths,
    'assetsRoot'=>'/pmvc/assets',
    'webpackVendor'=>[]
];

if ('cli'===getenv("DUMP")){
    echo json_encode(${_INIT_CONFIG});
}
