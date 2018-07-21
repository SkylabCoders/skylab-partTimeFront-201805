import firebase from 'firebase';
import ProgressPromise from 'progress-promise';

class UploadService {
    static uploadFile(file, uploadFolder){
        return new ProgressPromise((resolve, reject, progress) => {
            const fileName = `${+(new Date())}-${file.name}`;
            const storageRef = firebase.storage().ref();
            const myImageRef = storageRef.child(`${uploadFolder}/${fileName}`);
            const uploadTask = myImageRef.put(file);

            uploadTask.on( //Recibe un string y tres funciones
                'state_changed', 
                (snapshot) => {
                    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    progress(percentage);
                }, 
                (error) => {
                    reject('Ocurrió un error subiendo el archivo')
                }, 
                () => {
                    // Upload complete
                    uploadTask.snapshot.ref.getDownloadURL()
                        .then((downloadURL) => {
                            resolve(downloadURL);
                        });
                });
        })
    }
}