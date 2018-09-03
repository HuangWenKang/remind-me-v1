FROM microsoft/dotnet:2.1-sdk as build-env
WORKDIR /app

# copy csproj and restore as distinct layers
COPY . .
RUN dotnet restore
RUN dotnet build remind-me.csproj -c Release

FROM node as clientBuild
# RUN dotnet build remind-me.csproj -c Release -o /app
#Do npm restore and other Node stuff.

#Merge the contents of your .NET build env and your clientBuild and publish.
FROM build-env as publish
# copy everything else and build
COPY --from=clientBuild . .
RUN dotnet publish -c Release -o out

# build runtime image
FROM microsoft/dotnet:2.1-aspnetcore-runtime
WORKDIR /app

COPY --from=publish /app/out .
ENTRYPOINT ["dotnet", "remind-me.dll"]
