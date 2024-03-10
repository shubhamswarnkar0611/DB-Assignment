1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Ans-> The relationship between the "Product" and "Product_Category" entities is a one-to-many relationship, where each Product can belong to only one category but one Category has many Products in table.



2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
Ans->1. By adding  Not-Null constraint on "id" column of "Product_Category" table. 
     2. We can add database trigger on the "Product" table that checks if the "category_id" value is or not valid whenever a new record is inserted or an existing record is updated.