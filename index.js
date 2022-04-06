const path    = require( "path" )
const express = require( 'express' );

const PORT        = process.env.PORT || 5000;
const STATIC_ROOT = path.join( __dirname, "static" );
const STATIC_DIRS = [ 
    STATIC_ROOT, 
    path.join( STATIC_ROOT, 'index' )
];

const app    = express( )
const router = express.Router( );
const index  = path.join( STATIC_ROOT, 'index.html' );

STATIC_DIRS.forEach( 
    dir => app.use( '/', express.static( dir ) ) 
);

router.get('/', async ( _, res ) => 
{
  res.sendFile( index );
} );

app.use( router );

app.listen( PORT, ( ) => 
{
    console.log( index );

    console.log( `start http://localhost:${ PORT }` );
} )