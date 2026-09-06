import React, { useEffect, useState } from 'react'
import {createLetter} from '../../Services/LetterServices.js'
import {getLetter} from '../../Services/LetterServices.js'
import {updateLetter} from '../../Services/LetterServices.js'
import {deleteLetter} from '../../Services/LetterServices.js'
import './LetterPage.scss'

const LetterPage = ({book}) => {
   const [letters, setLetters] = useState([])
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [isCreating , setIsCreating] = useState(false)
   const [title, setTitle] = useState("")
   const [content , setContent] = useState("")
   useEffect(()=>{
     fetchLetters()
   },[])


    const fetchLetters = async ()=>{
      try{
        const response = await getLetter(book._id)
        console.log("Fetched letters:", response.data.letter);

        setLetters( response.data.letter);
        if(response.data.letter.length > 0){
          const firstLetter = response.data.letter[0];
          setSelectedLetter(firstLetter)
          setTitle(firstLetter.title)
          setContent(firstLetter.content)
        }
      }catch(err){
        console.log(err)
      }
    }
  const handleCreate = async () => {

    try {

      // validation
      if (!title.trim() || !content.trim()) {

        alert("Please enter title and content")

        return

      }


      const response = await createLetter(
        book._id,
        {
          title,
          content
        }
      )


      console.log("Created letter:", response.data)


      alert("Letter created successfully 💌")


      // create mode close
      setIsCreating(false)


      // clear editor
      setTitle("")
      setContent("")


      // refresh letters
      await fetchLetters()


    } catch (err) {

      console.log("Create letter error:", err)
      console.log("Backend error:", err.response?.data)

      alert("Something went wrong while creating letter")

    }

  }


    // here is the code of update letter
       const handleUpdate =  async() =>{
    try {
       if( !selectedLetter) return
        const response = await updateLetter(selectedLetter._id,{title,content})
         alert("Letter updated successfully")
         fetchLetters()
    }
    catch(err){
      console.log(err)
      alert("Something went wrong")
    }
   }
   // here is the code for deleting the letter 
    const handleDelete = async () => {
  try {
    if (!selectedLetter) return;

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this letter?'
    );

    if (!confirmDelete) return;

    await deleteLetter(selectedLetter._id);

    alert('Letter deleted successfully 🗑');

    setSelectedLetter(null);
    setTitle('');
    setContent('');

    fetchLetters();
  } catch (err) {
    console.log(err);
    alert('Something went wrong while deleting');
  }
};
  return (
    
  <div className="letter-layout">
      <div className="letters-container">
      
      <div className="letters-header">
        <h2>💌 Letters</h2>
      </div>

          <button
            className="create-letter-btn"
            onClick={() => {
      setIsCreating(true);
      setSelectedLetter(null);
      setTitle("");
      setContent("");
    }}
          >
            ➕ Create Letter
          </button>
      

      <div className="letters-list">

        {letters.length === 0 ? (
          <p>No letters found</p>
        ) : (
          letters.map((letter) => (
            <div className={`letter-card ${
      selectedLetter  ?._id === letter._id ? 'active' : ''
    }`} key={letter._id}
     onClick={() => {
       setIsCreating(false); 
      setSelectedLetter(letter);
      setTitle(letter.title);
      setContent(letter.content);
    }}
    >

              <div className="letter-icon">💖</div>

              <div className="letter-info">
                <h3>{letter.title}</h3>

                <p>
                  {letter.content.substring(0, 60)}...
                </p>

                <span>
                  {new Date(letter.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="arrow">›</div>

            </div>
          ))
        )}

      </div>
      
    </div>
     <div className="letter-editor">

      {selectedLetter  || isCreating ? (
        <>
          <h2>
  {isCreating ? "📝 Create Letter" : "✏️ Edit Letter"}
</h2>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />

          <textarea
            rows="14"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your letter here..."
          />

        <div className="editor-buttons">

  {isCreating ? (
    <button
      className="create-letter-btn"
      onClick={handleCreate}
    >
      💌 Create Letter
    </button>
  ) : (
    <>
      <button
        className="update-btn"
        onClick={handleUpdate}
      >
        💾 Update Letter
      </button>

      <button
        className="delete-btn"
        onClick={handleDelete}
      >
        🗑 Delete Letter
      </button>
    </>
  )}

</div>
        </>
      ) : (
        <p>Select a letter to view</p>
      )}

    </div>
  </div>
    
  )
}

export default LetterPage
