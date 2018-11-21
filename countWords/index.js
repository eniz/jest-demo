import { diffWords } from 'diff';

export function countWords( content ) {

  if ( content && typeof content === 'string' ) {
    content = content.replace( /\.\.\./g, ' ' );
    content = content.replace( /<.[^<>]*?>/g, ' ' );
    content = content.replace( /&nbsp;|&#160;/gi, ' ' );

    content = content.replace( /(\w+)(&#?[a-z0-9]+;)+(\w+)/i, '$1$3' ); // strip entities inside words
    content = content.replace( /&.+?;/g, ' ' ); // turn all other entities into spaces

    content = content.replace( /[0-9.(),;:!?%#$\x27\x22_+=\\\/\-]*/g, '' );

    const words = content.match( /[\w\u2019\x27\-\u00C0-\u1FFF]+/g );
    if ( words ) {
      return words.length;
    }
  }

  return 0;
}
