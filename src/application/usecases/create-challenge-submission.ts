import { Submission } from './../../domain/entities/submission';
type CreateChallengeSubmissionRequest = {
    studentId: string;
    challengeId: string;
}


export class CreateChallengeSubmission {
    constructor(
        private studentsRepository: StudentsRepository
    ) {}

    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest) {
        const student = this.studentsRepository.fondById(studentId)

        if (!student){
            throw new Error('Students does not exists');
        }

        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission;
    }
}