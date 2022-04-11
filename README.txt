Introduction to package.json
Any project that uses Node.js needs to have a package.json file that is known as
a patent of your project, which involves the modules and applications it depends on,
source control information, and specific metadata like the project’s name, explanation, and source.

A package.json file is always formatted in JSON format to make it readable as metadata and parsable by machines.

Project Dependencies and devDependencies Management in package.json
Another crucial feature of package.json is that it includes a collection of dependencies
on which a project relies to function properly. These dependencies make it easy for a project
to install the versions of the modules it depends on. By using the install command
(discussed in the below part) in a project, developers can install all the dependencies
that are included in the package.json, which means you don’t have to bundle them with the project itself.

Also, it separates the dependencies of production and development.
For instance, in production, you don’t need a tool to look after your CSS
for changes and refresh the app when they are modified, but in both production
 and development you need the modules that allow you to accomplish certain things with your project,
  like API Tools, Web framework, and code utilities.
Essential Commands of npm
As mentioned above, npm comes with a command line interface,
 which means you’ll have to use a command line tool for most of your interactions.
  So, here is an overview of commands that you’ll have to use most frequently.

npm init for initializing a project.

It is a step-by-step tool command that frames out your project. It prompts the user for a few aspects of the project in the following order:

Project’s name.
Project’s initial version.
Project’s description.
Project’s entry point (main file).
Project’s test command.
Project’s git repository (for project source).
Project’s keywords related to the project.
Project’s license.

When you follow the above steps of npm init,
it will generate a package.json file and place it in the current directory.
You can run this file for your own project or move it to a directory that is not dedicated to your project.

To use the npm init command, use the below command:

1
npm init # This will trigger the initialization.
However, if you want to accept the prompts that come from npm init automatically,
then use the –yes  flag on the npm init command.
It will populate all the options automatically with the default npm init values.