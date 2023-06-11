const btn_readed = document.getElementById('submitReaded');
const btn_notreaded = document.getElementById('submitNotreaded');

const books_name = document.getElementById('name');
const books_author = document.getElementById('author');
const books_year = document.getElementById('year');

const readedArray = [];
const notreadedArray = [];

function generateID() {
  return +new Date();
}

function movetonotreaded(id) {
  notreadedArray.push(readedArray[id]);
  deletereaded(id);
  renderArray();
}
function movetoreaded(id) {
  notreadedArray.push(readedArray[id]);
  deletenotreaded(id);
  renderArray();
}

function deletereaded(id) {
  readedArray.splice(id,1);
  renderArray();
}
function deletenotreaded(id) {
  notreadedArray.splice(id,1);
  renderArray();
}
function renderArray() {
  console.log("this is readed Array", readedArray);
  console.log("this is not readed Array", notreadedArray);
}

// RAK BUKU SUDAH DIBACA

btn_readed.addEventListener('click', function(event) {
  event.preventDefault();
  addtoReaded();
})

function addtoReaded() {
  // const generateId = generateID();
  const id = generateID();

  const readedObject = generateReadedShelfObject(id, books_name.value, books_author.value, books_year.value);
  readedArray.push(readedObject);
  alert("Data Buku Dimasukkan ke Rak Buku Sudah Selesai Dibaca");
  console.log(readedArray);
  const readedShelf = document.getElementById('shelf-readed');
  let el = `
    <div class="readed book${readedArray.length}" id="${id}">
      <div id="container-book">
        <h3>${readedObject.name}</h3>
        <p>Penulis: ${readedObject.author}</p>
        <p>Tahun Terbit: ${readedObject.year}</p>

        <input type="button" class="move add-option01" id="${id}" onclick="movetonotreaded(this.id)" name="" value="Belum Selesai Dibaca">
        <input type="button" class="delete" id="${id}" onclick="deletereaded(this.id)" name="" value="Hapus Buku">
      </div>
    </div>
  `;
  readedShelf.innerHTML += el;
}

function generateReadedShelfObject(id, name, author, year) {
  return {
      id,
      name,
      author,
      year
  }
}

// RAK BUKU BELUM SELESAI DIBACA

btn_notreaded.addEventListener('click', function(event) {
  event.preventDefault();
  addtoNotreaded();
})

function addtoNotreaded() {
  const id = generateID();

  const notreadedObject = generateNotReadedShelfObject(id, books_name.value, books_author.value, books_year.value);
  notreadedArray.push(notreadedObject);
  alert("Data Buku Dimasukkan ke Rak Buku Belum Selesai Dibaca");

  console.log(notreadedArray);
  const notreadedShelf = document.getElementById('shelf-not-readed');
  let el = `
    <div class="not-readed book${notreadedArray.length}" id="${id}">
      <div id="container-book">
        <h3>${notreadedObject.name}</h3>
        <p>Penulis: ${notreadedObject.author}</p>
        <p>Tahun Terbit: ${notreadedObject.year}</p>

        <input type="button" class="move add-option01" id="${id}" onclick="movetoreaded(this.id)" name="" value="Sudah Selesai Dibaca">
        <input type="button" class="delete" id="${id}" onclick="deletenotreaded(this.id)" name="" value="Hapus Buku">
      </div>
    </div>
    `;
  notreadedShelf.innerHTML += el;
}

function generateNotReadedShelfObject(id, name, author, year) {
  return {
      id,
      name,
      author,
      year
  }
}
