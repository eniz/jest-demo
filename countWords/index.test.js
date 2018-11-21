import { countWords } from './index';


describe( 'index', () => {
  describe( '#wordCount', () => {
    test( 'should return 0 for blank content', () => {
      expect( countWords( '' ) ).toEqual( 0 );
    } );

    test( 'should strip HTML tags and count words for a simple sentence', () => {
      expect( countWords( '<p>My sentence is this.</p>' ) ).toEqual( 4 );
    } );

    test( 'should not count dashes', () => {
      expect( countWords( '<p>Something -- ok</p>' ) ).toEqual( 2 );
    } );

    test( 'should not count asterisks or other non-word characters', () => {
      expect( countWords( '<p>* something\n\u00b7 something else</p>' ) ).toEqual( 3 );
    } );

    test( 'should not count numbers', () => {
      expect( countWords( '<p>Something 123 ok</p>' ) ).toEqual( 2 );
    } );

    test( 'should not count HTML entities', () => {
      expect(
        countWords( "<p>It&rsquo;s my life &ndash; &#8211; &#x2013; don't you forget.</p>" )
      ).toEqual( 6 );
    } );

    test( 'should count hyphenated words as one word', () => {
      expect( countWords( '<p>Hello some-word here.</p>' ) ).toEqual( 3 );
    } );

    test( 'should count words between blocks as two words', () => {
      expect( countWords( '<p>Hello</p><p>world</p>' ) ).toEqual( 2 );
    } );
  } );
});
