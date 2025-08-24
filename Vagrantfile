# Vagrantfile for CI/CD Project - 3 VMs
Vagrant.configure("2") do |config|

  # VM 1: App Server
  config.vm.define "appserver" do |app|
    app.vm.box = "ubuntu/focal64"   # Ubuntu 20.04 LTS
    app.vm.hostname = "appserver"
    app.vm.network "private_network", ip: "192.168.56.11"
    app.vm.provider "virtualbox" do |vb|
      vb.name = "AppServer"
      vb.memory = "2048"
      vb.cpus = 2
    end
    app.vm.provision "shell", inline: <<-SHELL
      apt-get update -y
      apt-get install -y nginx
      systemctl enable nginx
    SHELL
  end

  # VM 2: Database Server
  config.vm.define "dbserver" do |db|
    db.vm.box = "ubuntu/focal64"
    db.vm.hostname = "dbserver"
    db.vm.network "private_network", ip: "192.168.56.12"
    db.vm.provider "virtualbox" do |vb|
      vb.name = "DBServer"
      vb.memory = "2048"
      vb.cpus = 2
    end
    db.vm.provision "shell", inline: <<-SHELL
      apt-get update -y
      apt-get install -y mysql-server
      systemctl enable mysql
    SHELL
  end

  # VM 3: CICD Server
  config.vm.define "cicdserver" do |cicd|
    cicd.vm.box = "ubuntu/focal64"
    cicd.vm.hostname = "cicdserver"
    cicd.vm.network "private_network", ip: "192.168.56.13"
    cicd.vm.provider "virtualbox" do |vb|
      vb.name = "CICDServer"
      vb.memory = "4096"
      vb.cpus = 2
    end
    cicd.vm.provision "shell", inline: <<-SHELL
      apt-get update -y
      apt-get install -y git curl unzip
    SHELL
  end

end
