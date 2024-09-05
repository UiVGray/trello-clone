// Classes creation
export class Task {
  id = crypto.randomUUID();
  createdAt = new Date().toLocaleDateString();

  constructor(title, description, assignedUser) {
    this.title = title;
    this.description = description;
    this.assignedUser = assignedUser;
    this.status = 'todo';
  }
}
