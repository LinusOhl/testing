describe("Todos", () => {
	context("initial state", () => {
		beforeEach(() => {
			cy.intercept("GET", "http://localhost:3001/todos", {
				fixture: "todos.json",
			});

			cy.visit("/");
		});

		it("should see atleast one todo", () => {
			cy.get("#todos").find("li").should("have.length.at.least", 1);
		});

		it("create todo form should be empty", () => {
			cy.get("#new-todo-title").should("have.value", "");
		});
	});

	context("create todo", () => {
		beforeEach(() => {
			cy.visit("/");
		});

		it("can't create a todo without a title", () => {
			cy.get(`button[type="submit"]`).click();
			cy.get("#error")
				.should("be.visible")
				.contains("Title cannot be empty");
		});

		it("can create a new todo (and see it in the list)", () => {
			cy.get("#new-todo-title").type("🍞 Buy food!");
			cy.get(".btn-success").click();
			cy.get("#todos")
				.find("li")
				.last()
				.should("contain.text", "🍞 Buy food!");
		});

		it("can type in the create todo form and then reset the form", () => {
			cy.get("#new-todo-title").type("I'm gonna regret this...");
			cy.get(`button[type="reset"]`).click();
			cy.get("#new-todo-title").should("have.value", "");
		});
	});
});
