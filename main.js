const foo = document.getElementById("foo");
const bar = document.getElementById("bar");
const foobar = document.getElementById("foobar");
const main = document.querySelector("main");

foo.addEventListener('click', function(){
    const fooBtn = document.createElement('h3');
    fooBtn.textContent = "Foo";
    main.appendChild(fooBtn);     
})

bar.addEventListener('click', function(){
  const barBtn = document.createElement('h3');
  barBtn.textContent = "Bar";
  main.appendChild(barBtn);     
})

foobar.addEventListener('click', function(){
  const foobarBtn = document.createElement('h2');
  foobarBtn.textContent = "FooBar";
  main.appendChild(foobarBtn);     
})
