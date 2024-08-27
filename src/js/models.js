// Models creation
export function Task(title, description, assignedUser) {
  const date = new Date()

  this.id = crypto.randomUUID();
  this.title = title;
  this.createdAt = date.toLocaleDateString();
  this.description = description;
  this.assignedUser = assignedUser;
  this.status = 'todo';
}
