import CustomDropZone from './example'

class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            name                 : '',
            lastname             : '',
            picture              : '',
            dni                  : '',
            dniPicture           : '',
            recommendationLetter : ''
        }

        this.updateFormInputElegant = this.updateFormInputElegant.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
  
    submitForm(){
        //LLAMAR A FIREBASE FIRESTORE Y GUARDAR REGISTRO CON TODA LA INFO
    }
   

    updateFormInputUgly(field, value){
        let tempState = this.state;
        tempState[field] = value;

        this.setState(tempState)
    }
  
    updateFormInputElegant(field, value){
        this.setState({[field]: value})
    }

    render() {
      return (
        <section>
            <form onSubmit={this.submitForm}>
                <input value={this.state.name} onChange={(e)=>{this.updateFormInputElegant('name', e.target.value)}}/>
                <input value={this.state.lastname} onChange={(e)=>{this.updateFormInputElegant('lastname', e.target.value)}}/>
                <CustomDropZone 
                    onFileUpload={(fileUrl)=>{this.updateFormInputElegant('picture', fileUrl)}}
                    acceptedFiles="image/jpeg, image/png"
                    uploadFolder="userProfile"
                />
                <input value={this.state.dni} onChange={(e)=>{this.updateFormInputElegant('dni', e.target.value)}}/>
                <CustomDropZone 
                    onFileUpload={(fileUrl)=>{this.updateFormInputElegant('dniPicture', fileUrl)}}
                    acceptedFiles="image/jpeg, image/png"
                    uploadFolder="userIDs"
                />
                <CustomDropZone 
                    onFileUpload={(fileUrl)=>{this.updateFormInputElegant('recommendationLetter', fileUrl)}}
                    acceptedFiles="application/pdf"
                    uploadFolder="recommendationLetters"
                />
            </form>
        </section>
      );
    }
  }