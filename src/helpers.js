// debounce function helps not to update the database
// every single time a caracter is typped, but will wait until the sentence is finished
// 1 or 2 seconds and then update the db
// HELPS not to have too many HTTP calls 

export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
  // react-quill display the text as actual html, so we are going to remove the html tags 
  // and only get back a string
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };