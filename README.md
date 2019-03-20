# Stream App


-   react-router-dom    
Navigation for dom-based apps (we want this)

-   react-router-redux
    Bindings between Redux and React Router (not necessary)
    

    React Router only cares about the characters after 
    the domain and port definition.

    When we created an application and loaded,
    An instance of BrowserRouter - it listens to 'history' for changes to the URL
    [history] Keeps track of the address bar in your browser.
    
    [History] object is communicating that path over to BrowserRouter and BR will communicate that path to both Route components visible only when "path" matches the current URL. 

    [ Address Bar myapp:8000/ ] > [ / ]

    - < Route path="/" component={One} />

    The rule that decides what component shows
    on the screen is by this code right here
    `
    extractedPath.contains(path)
    `

    Does extracted path contain 
    <Route path="/page" component={Two}/>

    If I go to domain/page , "/page" 

    It does contain , this string does contain that string though it would show that component, 
    move on to the next component and then it would show that.

    With 'exact' keyword. Does route '/' exactly equals
    {PageOne}. It does, it will be shown on the screen.
    A path with '/' with no 'exact' keyword will be shown on the screen.

    No Anchor tags with react-router
    # Bad Navigation

    You add an <a/> tag to your application with 
    href='/pagetwo' and click it

    Your browser makes a request to localhost:3000

    Development server responds with index.html file

    Browser receives index.html file, dumps old HTML file it was showing (including all of your React/Redux state data!)

    index.html file lists our JS files in script tags - browser downloads and executes these scripts

    ### What We Want

    - Users wants to navigate to another page in our app
    - User clicks a 'Link' tag

    - React Router prevents the browser from navigating to the new page and fetching new index.html file!
    URL Still changes
    'History' sees updated URL, takes URL and sends it to BrowserRouter

    BrowserRouter communicates the URL to Route components

    Route components rerender to show new set of components..
    React router is going to detect a click and showing and hiding components, not making a seperate request.    

    # Different Routers
    
    [BrowserRouter] Uses everything after the TLD (.com, .net ) or port as the 'path'

    [HashRouter] Uses everything after a # as the 'path'
    '/#/' injected automatically

    [MemoryRouter] Doesn't use the URL to track navigation URL doesn't updates at all as I navigate through the application

    Looking for content for the route '/pagetwo'? 
    
    A normal web server would respond with 404.

    [Create-React-App] Web Dev Server

    * Do I have anything special for /pagetwo ?

    * Check dev resources
    * Check public dir
    [ Nope, ok, guess I'll serve up the index.html file
    ]
    That is the total key of how the BrowserRouter works.
    The server does not know what to do with the path /pagetwo? We are making a request to our server for the route /pagetwo, our react dev server returns automatically the index.html. 

    It sees the script link tag that contains our app code, react router loads up, the history object that is created by the browser router loads up, inspects the current URL, inspects the current URL SEES where at the route '/pagetwo' and the browserRouter tells <Route>'s we're at <PageTwo> so render yourself appropiately.