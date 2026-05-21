const fs = require('fs').promises;

async function writeWithFileHandle() {
  let fileHandle;

  try {
    // Open a file for writing (creates if doesn't exist)
    fileHandle = await fs.open('output.txt', 'w');

    // Write content to the file
    await fileHandle.write('First line\n');
    await fileHandle.write('Second line\n');
    await fileHandle.write('Third line\n');

    console.log('Content written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  } finally {
    // Always close the file handle
    if (fileHandle) {
      await fileHandle.close();
    }
  }
}

// writeWithFileHandle();




// file delete.........

async function singFileDelete(){
  const filePath = 'output.txt'

  try{
    await fs.access(filePath)
    await fs.unlink(filePath)
    console.log("file delete succesfullY")
  }
  catch(err){

    if(err.code ==='ENOENT'){
      console.log('file not finding')
    }else{
      console.error('error deleting file :' , err )
    }


  }
}

singFileDelete()