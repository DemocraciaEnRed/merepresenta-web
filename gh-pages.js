import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
  {
    branch: 'gh-pages',
    dotfiles: true,
  },
  (err) => {
    if(err){
      console.log(err)
    }else{
      console.log('Deploy Complete!');
    }
  }
);