# RecipeBook
** https://sitap1312.github.io/RecipeBook/ **
** https://recipe-book-072021-sita.netlify.app **

# Project Overview

## Project Name

RecipeBook

## Project Description
 
This is a Blog for Recipes, where users can View, Post, Edit and Delete Recipes. This is Recipe Book, which contains most some famous recipes.

## API and Data Sample

# API

** "https://api.airtable.com/v0/appSInE5zpFAMVQTu/Table%203"

# Data Sample: 
```
"records": [
    {
      "fields": {
        "name": "Test1",
        "Ingredients": "Test1",
        "PrepSteps": "Test1",
        "PrepTime": 3600
      }
    },
    {
      "fields": {
        "name": "Test2",
        "Ingredients": "Test2",
        "PrepSteps": "Test2",
        "PrepTime": 5400
      }
    }
  ]
}'

"records": [
        {
            "id": "recb78lILXaJbafsw",
            "fields": {
                "createdBy": {
                    "id": "usrv2cGZFMS5PdOiZ",
                    "email": "sitapataballa1312@gmail.com",
                    "name": "Sita Pataballa"
                },
                "createdTime": "2021-07-13T14:13:19.000Z",
                "name": "Test1",
                "modifiedBy": {
                    "id": "usrv2cGZFMS5PdOiZ",
                    "email": "sitapataballa1312@gmail.com",
                    "name": "Sita Pataballa"
                },
                "modifiedTime": "2021-07-13T14:25:24.000Z",
                "Ingredients": "Test1",
                "PrepSteps": "Test1",
                "PrepTime": 3600
            },
            "createdTime": "2021-07-13T14:13:19.000Z"
        },

```


## Wireframes

![Screen Shot 2021-07-13 at 7 47 15 AM](https://user-images.githubusercontent.com/85080279/125473070-fb21f69b-68ce-47df-846e-89a25183994b.png)

### MVP/PostMVP
  

#### MVP 

- Create React App, install dependencies. 
- Create a base frame for the project.
- Create Components and display data.
- Display all recipes.
- Navigations to all components.
- Allow users to Edit and Delete recipes.
- Allow users to Like recipes.
- Allow users to Add new recipes.
- Update modified date, time and modofied By.
- Adding media query.
- Add styling in CSS, include Flexbox or Grid styling.

#### PostMVP  

- Allow user to comment on recipes.
- Render video links for recipes.
- Allow user to scroll back to the top of the page by single click.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 13| Priority Matrix, Wireframes, Project Approval | Complete
|July 14| Core Application Structure | Complete
|July 15| Actual code | Complete
|July 16| MVP  | Complete
|July 17| CSS Styling | Complete
|July 18| PMVP and advance styling  | Complete
|July 19| Advance Styling, PMVP| Complete
|July 20| Presentations | Complete

## Priority Matrix

![Screen Shot 2021-07-13 at 8 49 59 AM](https://user-images.githubusercontent.com/85080279/125484019-0e18f284-5363-4659-8a7b-4d07f215a34d.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Creating basic structure| H | 3hrs| 4rs | 4hrs |
| Components | H | 6hrs | 3hrs | 3hrs |
| React actual code | H | 3hrs | 4hrs | 4hrs |
| Working with API | H | 3hrs| 2hrs | 2hrs |
| CSS Styling | H | 6hrs | 7hrs | 7hrs |
| Navigations | H | 3hrs | 1.5hrs | 1.5hrs |
| Editing and Deleting | H | 2hrs | 0.5hrs | 0.5hrs |
| Responsive web desiging | H | 5hrs | 8hrs | 8hrs |
| Advance CSS Styling | H | 6hrs | 7hrs | 7hrs |
| PMVP Styling | H | 2hr | 2hrs | 2hrs |
| Review of Functionality | H | 3hrs | 1hrs | 1hrs |
| Total | H | 43hrs| 40hrs | 40hrs |

## Code Snippet

```
<Route exact path="/addrecipe">
          <AddRecipe />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </div>
      <div>
        <Footer />
      </div>
      
----------------------------------------------------------------------------------------------------------
      
      function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipe = async () => {
    const recipeURL = `${URL}/${id}`;
    const resp = await axios.get(recipeURL,
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` }
      });
    setRecipe(resp.data)
  };

```

## Change Log
 ```

 ```
