class JobPosition {
    private published: Date
    private title: string
    private description: string
    private location: string
    private salaryCap: number
    private isRemote: boolean
    private yearsOfExperience: number

    
    public static Builder = class{
        private published: Date
        private title: string
        private isRemote: boolean

        private description: string = ""
        private location: string = "Tel Aviv"
        private salaryCap: number = 20000
        private yearsOfExperience: number = 0
    
        constructor(published: Date, title: string, isRemote: boolean){

            this.published = published
            this.title = title
            this.isRemote = isRemote
        }
    
        setDescription(description: string){
            this.description = description
        }
    
        setLocation(location: string){
            this.location = location
        }
    
        setSalaryCap(salaryCap: number){
            this.salaryCap = salaryCap
        }
    
        setYearsOfExperience(yearsOfExperience: number){
            this.yearsOfExperience = yearsOfExperience
        }

        build(): JobPosition {
            return new JobPosition(this)
        }
    }

    private constructor(builder) {
        this.published = builder.published
        this.title = builder.title
        this.description = builder.description
        this.location = builder.location
        this.salaryCap = builder.salaryCap
        this.isRemote = builder.isRemote
        this.yearsOfExperience = builder.yearsOfExperience
    }

    
}